var imageSources = {
  image1: ['/imger/dubi/dubai-marina.jpg', '/imger/dubi/person-looking-futuristic-mystical-other-worldly-sky.jpg', '/imger/dubi/view-famous-abu-dhabi-sheikh-zayed-mosque-by-night-uae.jpg','/imger/dubi/this-shot-swfc-2nd-tallest-building-shanghai.jpg'],
  image2: ['/imger/istanbul/ocean-istanbul-bateau-croisiere.jpg', '/imger/istanbul/femme-prendre-photo-son-smartphone-goreme-cappadoce-turquie.jpg', '/imger/istanbul/belle-fille-au-magasin-tapis-traditionnel-dans-ville-goreme-cappadoce-turquie.jpg',"/imger/istanbul/vue-aerienne-ville-littoral-turquie.jpg"],
  image3: ['/imger/bali/vue-aerienne-baie-phang-nga-montagnes-au-lever-du-soleil-thailande.jpg', '/imger/bali/plage-kelingking-dans-ile-nusa-penida-bali-indonesie.jpg', '/imger/bali/femme-asiatique-portant-culture-traditionnelle-du-vietnam-dans-jardin-fraises-doi-ang-khang-chiang-mai-thailande.jpg',"/imger/bali/belle-fille-debout-bateau-recherche-montagnes-dans-barrage-ratchaprapha-au-parc-national-khao-sok-province-surat-thani-thailande.jpg"],
  image4: ['image4-1.jpg', 'image4-2.jpg', 'image4-3.jpg'],
  image5: ['image5-1.jpg', 'image5-2.jpg', 'image5-3.jpg'],
  image6: ['image6-1.jpg', 'image6-2.jpg', 'image6-3.jpg'],
  // Add more image sources as needed
};

// Add click event listeners to each image
for (var i = 1; i <= 6; i++) {
  var imageId = 'image' + i;
  var currentImage = document.getElementById(imageId);

  // Initialize counter for each image
  var currentIndex = 0;

  // Add a click event listener to the image
  currentImage.addEventListener('click', function(event) {
    // Get the id of the clicked image
    var clickedImageId = event.target.id;

    // Add fade-out effect
    event.target.style.opacity = 0;

    // Wait for the fade-out effect to complete
    setTimeout(function() {
      // Update the image source for the clicked image to the next one in the array
      currentIndex = (currentIndex + 1) % imageSources[clickedImageId].length;
      event.target.src = imageSources[clickedImageId][currentIndex];

      // Add fade-in effect
      event.target.style.opacity = 1;
    }, 500); // 500ms is the duration of the fade-out effect

    // You can also add other actions or modifications here
  });
}