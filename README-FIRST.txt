CIS341 PORTFOLIO WEBSITE — READ THIS FIRST

Your website files are:
- index.html (Home page)
- contact.html (Contact Me page)
- style.css (website design)
- script.js (form validation)

IMPORTANT — PERSONAL DETAILS TO UPDATE BEFORE SUBMITTING:
1. Student ID, name, major, year, and JUST email have been filled in using the details you provided.
2. The assignment requires a professional photo. Add your own photo to this folder named profile.jpg.
   Then in index.html, find the comment near the SW circle and replace:
      <div class="avatar" aria-label="Photo placeholder">SW</div>
   with:
      <img class="profile-photo" src="profile.jpg" alt="Portrait of Shahed Wriekat">
   Add this CSS rule at the end of style.css:
      .profile-photo { width:145px; height:145px; object-fit:cover; border-radius:50%; margin:0 auto 20px; display:block; border:7px solid white; box-shadow:0 0 0 1px #e5e7f4; }

CHECK BEFORE SUBMISSION:
- Add your own professional photo.
- Check that your GitHub username matches the username part of your JUST email, as required by the assignment.
- Publish the files using GitHub Pages.
- Open the published link and test both pages and the form.
- Submit ONLY the website URL on E-learning.

The contact form validates the fields and shows a success alert as required by the assignment.
It does not send/store messages; the assignment only asks for validation and an alert.
