function showInterviewFile()
{
  var college=document.getElementById('CollegeNotes');
  college.style.display="none"
  var interview=document.getElementById('Interview');
  if(interview.style.display=="none")
       {
         interview.style.display="block";
       }
       else {
         interview.style.display="none";
       }

}
function showCollegeFile()
{
  var interview=document.getElementById('Interview')
   interview.style.display="none";

  var college=document.getElementById('CollegeNotes')
  if(college.style.display=="none")
       {
         college.style.display="block";
       }
       else {
         college.style.display="none";
       }

}
