import fs from 'fs';

try {
  const source = 'c:\\Users\\kaife\\OneDrive\\Documents\\TESTING\\BROCHURE_ORIGINN.jpg';
  const dest = 'c:\\Users\\kaife\\OneDrive\\Documents\\TESTING\\portfolio\\public\\BROCHURE_ORIGINN.jpg';
  fs.copyFileSync(source, dest);
  console.log('Successfully copied BROCHURE_ORIGINN.jpg to public directory!');
} catch (e) {
  console.error('Error copying file:', e);
}
