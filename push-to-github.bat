@echo off
echo ===================================================
echo Pushing Portfolio to GitHub (mayank-19-portfolio)
echo ===================================================
echo Remote: https://github.com/mayank19ky/mayank-19-portfolio.git
echo Branch: main
echo.
"%LOCALAPPDATA%\Programs\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Your repository has been pushed to GitHub successfully!
) else (
    echo [NOTE] If prompted above, please complete the GitHub sign-in in your browser.
)
echo.
pause
