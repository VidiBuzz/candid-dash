import { execSync } from 'child_process';

const port = process.env.PORT || 3000;
execSync(`serve -s dist -l ${port}`, { stdio: 'inherit' });