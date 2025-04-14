const samples = [
    { name: "Ah-Ha", file: "ah-ha.mp3", duration: 1.4 },
    { name: "Dan", file: "dan.mp3", duration: 1.8 },
    { name: "Email of the Evening", file: "emailoftheevening.mp3", duration: 1.2 },
    { name: "Hello Partridge", file: "hellopartridge.mp3", duration: 2.25 },
    { name: "Bang Out of Order", file: "bangoutoforder.mp3", duration: 1.38 },
    { name: "I'm Confused", file: "imconfused.mp3", duration: 1.44 },
    { name: "I Ate a Scotch Egg", file: "iateascotchegg.mp3", duration: 1.32 },
    { name: "Back of the Net", file: "back-of-the-net.mp3", duration: 1.22 },
    { name: "Knowing Me Knowing You", file: "knowingmeknowingyou.mp3", duration: 1.51 },
    { name: "Smell My Cheese", file: "smellmycheese.mp3", duration: 1.66 },
    { name: "Jurassic Park", file: "jurassicpark.mp3", duration: 1.5 },
    { name: "Monkey Tennis", file: "monkeytennis.mp3", duration: 1.33 }
  ];
  
  const itemsPerPage = 9;
  let currentPage = 0;
  
  function renderSamples() {
    const grid = document.getElementById('sampleGrid');
    grid.innerHTML = '';
  
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = samples.slice(start, end);
  
    pageItems.forEach((sample, index) => {
      const btn = document.createElement('div');
      btn.className = 'sample';
      btn.innerHTML = `
        ${start + index + 1}. ${sample.name}
        <div class="duration">${sample.duration}s</div>
      `;
      btn.onclick = () => playSample(sample.file);
      grid.appendChild(btn);
    });
  
    document.getElementById('prevPage').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('nextPage').style.display = end >= samples.length ? 'none' : 'inline-block';
  }
  
  function playSample(filename) {
    const audio = new Audio(`audio/${filename}`);
    audio.play();
  }
  
  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      renderSamples();
    }
  }
  
  function nextPage() {
    if ((currentPage + 1) * itemsPerPage < samples.length) {
      currentPage++;
      renderSamples();
    }
  }
  
  function speakText() {
    const text = document.getElementById('ttsInput').value;
    if (text.trim() !== '') {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  }
  
  window.onload = renderSamples;
  