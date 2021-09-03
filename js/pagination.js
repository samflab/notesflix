function displaypage(disp,y)
{
  var x = document.getElementById(disp);
 var i=0;
 var m;
   x.style.display = "block";
for(i=0;i<=y;i++)
{
  if(i!=disp)
  {
    m=document.getElementById(i);
    m.style.display="none";

  }
}

}
