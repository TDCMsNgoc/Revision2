param(
    [int]$Port = 8086,
    [switch]$NoBrowser
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    try {
        $Port = 8087
        $prefix = "http://localhost:$Port/"
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add($prefix)
        $listener.Start()
    } catch {
        $Port = 8088
        $prefix = "http://localhost:$Port/"
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add($prefix)
        $listener.Start()
    }
}

# Lấy địa chỉ IP mạng nội bộ (LAN) để test trên iPad / Điện thoại
$localIP = "localhost"
try {
    $ipConfig = Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Wi-Fi*", "Ethernet*" | Where-Object { $_.IPAddress -notlike "169.254*" -and $_.IPAddress -notlike "127.*" } | Select-Object -First 1
    if ($ipConfig) {
        $localIP = $ipConfig.IPAddress
    }
} catch {}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " PHAN MEM TRAC NGHIEM 40 CAU NGAU NHIEN - REVISION 2 (TDC)" -ForegroundColor Green
Write-Host " May tinh (Desktop): $prefix" -ForegroundColor Yellow
Write-Host " Dien thoai / iPad : http://$($localIP):$Port/" -ForegroundColor Yellow
Write-Host " Thu muc: $root" -ForegroundColor Gray
Write-Host " Nhan Ctrl+C de dung may chu." -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# Open default browser
if (-not $NoBrowser) {
    try { Start-Process $prefix } catch {}
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($urlPath)) {
            $urlPath = "index.html"
        }

        # Prevent directory traversal
        $safePath = [System.IO.Path]::Combine($root, $urlPath)
        $fullPath = [System.IO.Path]::GetFullPath($safePath)

        if ($fullPath.StartsWith($root) -and (Test-Path -Path $fullPath -PathType Leaf)) {
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                Default { "application/octet-stream" }
            }

            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.StatusCode = 200
        } else {
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.StatusCode = 404
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.Close()
    } catch {
        # Loop continues
    }
}
