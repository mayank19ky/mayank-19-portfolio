// scripts/generate-resume-pdf.js
// Generates a clean, valid PDF 1.4 resume for Mayank Kumar Yadav
import fs from 'fs';
import path from 'path';

function createResumePDF() {
  const content = `
BT
/F1 22 Tf
50 780 Td
(MAYANK KUMAR YADAV) Tj
0 -20 Td
/F2 11 Tf
(B.Tech 1st Year - Electronics & Communication Engineering) Tj
0 -14 Td
/F2 10 Tf
(Semiconductor Specialization with TrueChip | JECRC University, Jaipur) Tj
0 -16 Td
/F2 9 Tf
(Phone: +91 9138001940  |  Email: mayank19ky@gmail.com  |  Location: Rewari, Haryana, India) Tj
0 -12 Td
(LinkedIn: linkedin.com/in/mayank-kumar-yadav-b8158b273/  |  Portfolio: Online) Tj

0 -25 Td
/F1 13 Tf
(ACADEMIC PROFILE & OBJECTIVE) Tj
0 -14 Td
/F2 9.5 Tf
(Passionate first-year ECE student specializing in Semiconductor Technology & VLSI in partnership with) Tj
0 -12 Td
(TrueChip. Actively developing foundational skills in circuit design, C/Python programming, robotics, and) Tj
0 -12 Td
(artificial intelligence. Driven by a deep interest in microchip architecture, open-source innovation, and) Tj
0 -12 Td
(deeptech entrepreneurship with an ambition to build high-impact hardware-software systems.) Tj

0 -24 Td
/F1 13 Tf
(EDUCATION) Tj
0 -16 Td
/F1 10.5 Tf
(B.Tech in Electronics & Communication Engineering - Semiconductor Specialization) Tj
0 -13 Td
/F2 9.5 Tf
(JECRC University, Jaipur  |  In Collaboration with TrueChip  |  2024 - 2028 (Expected 2030)) Tj
0 -12 Td
(- Specializing in VLSI design fundamentals, digital logic, and semiconductor fabrication principles) Tj

0 -16 Td
/F1 10.5 Tf
(Senior Secondary Education (Class XII - CBSE)) Tj
0 -13 Td
/F2 9.5 Tf
(SD SR SEC School, Kakrala, Mahendragarh, Haryana  |  Science Stream (PCM)) Tj

0 -16 Td
/F1 10.5 Tf
(Secondary Education (Class X - CBSE)) Tj
0 -13 Td
/F2 9.5 Tf
(SD SR SEC School, Kakrala, Mahendragarh, Haryana) Tj

0 -24 Td
/F1 13 Tf
(TECHNICAL SKILLS) Tj
0 -15 Td
/F1 9.5 Tf
(Core Electronics: ) Tj
/F2 9.5 Tf
(Electronics Fundamentals, Circuit Analysis, VLSI / Chip Design (Foundational), Embedded Systems) Tj
0 -14 Td
/F1 9.5 Tf
(Programming: ) Tj
/F2 9.5 Tf
(C, Python, HTML5, CSS3, JavaScript, Modern Web Development) Tj
0 -14 Td
/F1 9.5 Tf
(Emerging Tech: ) Tj
/F2 9.5 Tf
(Artificial Intelligence, Generative AI Models, Google AI Certified) Tj
0 -14 Td
/F1 9.5 Tf
(Tools & Other: ) Tj
/F2 9.5 Tf
(Git/GitHub, Linux Basics, VS Code, Robotics Prototyping (Learning), Digital Productivity) Tj

0 -24 Td
/F1 13 Tf
(FEATURED PROJECTS) Tj
0 -16 Td
/F1 10 Tf
(1. Personal Silicon-Themed Engineering Portfolio) Tj
0 -12 Td
/F2 9 Tf
(- Developed a responsive, dark-mode personal website using React, Vite, and Tailwind CSS.) Tj
0 -11 Td
(- Features semiconductor-inspired styling, circuit schematics, live project showcases, and contact hub.) Tj

0 -15 Td
/F1 10 Tf
(2. AI-Powered Assistant Web Application) Tj
0 -12 Td
/F2 9 Tf
(- Designed an interactive web interface integrating generative AI capabilities for automated tasks.) Tj

0 -15 Td
/F1 10 Tf
(3. Student Productivity & Academic Workflow Suite) Tj
0 -12 Td
/F2 9 Tf
(- Built a lightweight system for tracking engineering coursework, lab milestones, and project goals.) Tj

0 -24 Td
/F1 13 Tf
(CERTIFICATIONS & INTERESTS) Tj
0 -14 Td
/F2 9.5 Tf
(- Certification: Google AI Certification - Foundational AI, ML Principles, and Generative AI Concepts) Tj
0 -13 Td
(- Interests: Competitive Hackathons, Robotics & Sensor Interfacing, Chip Startups & Entrepreneurship) Tj
ET
`.trim();

  // Construct PDF objects
  const objects = [];
  
  // 1: Catalog
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`);
  // 2: Pages
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`);
  // 3: Page
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj`);
  // 4: Stream
  const streamLength = Buffer.byteLength(content, 'utf-8');
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${content}\nendstream\nendobj`);
  // 5: Font Bold (Helvetica-Bold)
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj`);
  // 6: Font Regular (Helvetica)
  objects.push(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`);

  let fileContent = `%PDF-1.4\n`;
  const xrefOffsets = [0]; // offset 0
  
  for (let i = 0; i < objects.length; i++) {
    xrefOffsets.push(fileContent.length);
    fileContent += objects[i] + `\n`;
  }
  
  const xrefStart = fileContent.length;
  fileContent += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  
  for (let i = 1; i <= objects.length; i++) {
    const offset = String(xrefOffsets[i]).padStart(10, '0');
    fileContent += `${offset} 00000 n \n`;
  }
  
  fileContent += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  
  const outDir = path.resolve('public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outDir, 'Mayank_Kumar_Yadav_Resume.pdf'), fileContent, 'utf-8');
  console.log('Resume PDF generated successfully at public/Mayank_Kumar_Yadav_Resume.pdf');
}

createResumePDF();
