@echo off
title TDC English Quiz - Revision 2
color 0b
echo ==========================================================
echo  DANG KHOI CHAY UNG DUNG TRAC NGHIEM REVISION 2 (TDC)
echo ==========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
