<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Properties</h2>

<p>The length property returns the length of a string:</p>
Cancel changes
<p id="demo"></p>

<input type='text' id='txt1'/>

<input type='text' id='txt2'/>

<input type='button' id='btn' value='deneme'/>



<script>

let aktifSinif=this;
aktifSinif.aktifEditor=null;

document.getElementById('txt1').onfocus =function (e) {
      aktifSinif.aktifEditor=document.getElementById('txt1');
     
};

document.getElementById('txt1').onblur =function (e) 
{

  if(!(e.relatedTarget && e.relatedTarget.id==='btn'))
  {
  	 aktifSinif.aktifEditor=null;
  }
  
  console.log(aktifSinif.aktifEditor);
   

};




</script>

</body>
</html>
