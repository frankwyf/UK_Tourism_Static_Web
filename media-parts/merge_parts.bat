@echo off
setlocal
set OUT=UK_Tourism_media_pack.zip
if exist "%OUT%" del /f /q "%OUT%"
copy /b UK_Tourism_media_pack.part* "%OUT%" >nul
echo Rebuilt: %OUT%

