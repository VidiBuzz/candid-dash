@echo off
echo Deploying changes to live server...
git add .
git commit -m "Update Cloud block branding"
git push
echo.
echo Deployment complete!
pause
