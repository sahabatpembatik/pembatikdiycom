function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VdKACQ24dQ":
        Script1();
        break;
      case "5qp4VheAU5Y":
        Script2();
        break;
      case "6anHIDZJLkp":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsound');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audiomusik = document.getElementById('bgsound');
audiomusik.volume=0;
}

function Script3()
{
  var audiomusik = document.getElementById('bgsound');
audiomusik.volume=0.3;
}

