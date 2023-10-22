const fileLinks = document.getElementsByClassName('files')
const folderLinks = document.getElementsByClassName('folders')
const magicLinks = document.getElementsByClassName('magic-link')

const normalColor = '#000000'
const svg = {
    file: '<svg width="20" height="13" viewBox="0 0 128 93" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M77.9494 0H26V93H102V28.2165L77.9494 0ZM92 36H68V10H36V83H92V36ZM86.9711 26L78 15.475V26H86.9711Z" fill="black"/></svg>',
    folder:'<svg width="19" height="12" viewBox="0 0 128 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H59V17H117V90H11V0ZM21 10H49V17H21V10ZM21 27V80H107V27H21Z" fill="black"/></svg>',
    magic: '<svg width="20" height="14" viewBox="0 0 128 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M108.143 53.7823L82.6378 48.7365C82.8727 47.5489 83 46.3022 83 45C83 43.6978 82.8727 42.4511 82.6378 41.2635L108.143 36.2177C108.705 39.0581 109 41.9947 109 45C109 48.0053 108.705 50.9419 108.143 53.7823ZM101.42 19.9973L79.8153 34.4616C78.4206 32.3784 76.6216 30.5794 74.5384 29.1847L89.0027 7.57955C93.91 10.8649 98.1351 15.09 101.42 19.9973ZM72.7823 0.856531L67.7365 26.3622C66.5489 26.1273 65.3022 26 64 26C62.6978 26 61.4511 26.1273 60.2635 26.3622L55.2177 0.856532C58.0581 0.294613 60.9947 0 64 0C67.0053 0 69.9419 0.294612 72.7823 0.856531ZM38.9973 7.57956L53.4616 29.1847C51.3784 30.5794 49.5794 32.3784 48.1847 34.4616L26.5796 19.9973C29.8649 15.09 34.09 10.8649 38.9973 7.57956ZM19.8565 36.2177C19.2946 39.0581 19 41.9947 19 45C19 48.0053 19.2946 50.9419 19.8565 53.7823L45.3622 48.7365C45.1273 47.5489 45 46.3022 45 45C45 43.6978 45.1273 42.4511 45.3622 41.2635L19.8565 36.2177ZM26.5796 70.0027L48.1847 55.5384C49.5794 57.6216 51.3784 59.4206 53.4616 60.8153L38.9973 82.4204C34.09 79.1351 29.8649 74.91 26.5796 70.0027ZM55.2177 89.1435L60.2635 63.6378C61.4511 63.8727 62.6978 64 64 64C65.3022 64 66.5489 63.8727 67.7365 63.6378L72.7823 89.1435C69.9419 89.7054 67.0053 90 64 90C60.9947 90 58.0581 89.7054 55.2177 89.1435ZM89.0027 82.4204L74.5384 60.8153C76.6216 59.4206 78.4206 57.6216 79.8153 55.5384L101.42 70.0027C98.1351 74.91 93.91 79.1351 89.0027 82.4204Z" fill="black"/></svg>'
}
    // backup folder image
   
const colorArray = ["#93827f","#a8d966", "#f43197", "#bd78ae", "#31a47c", "#9A9AB4","#5887ff","#bcd8b7","#dfb3e6","#9A9AB4","#ac9486","#93a3bc","#C2F169","#99ddf0","#95a78d","#b3d274","#e36471","#ba324f","#ff9505","#ecdd7b","#00a676","#fde74c","#785dac", "#ffd3ba", "#3fa7d6"]

setHeight()
setAutoHighlightColor() // for any pre highlighted stuff

window.addEventListener('resize', () => {
    setHeight()
})

// Function to generate a gradient background color
function generateGradient() {
  const colorArrayCopy = [...colorArray]; // Create a copy of the colorArray
  const middleColor = "#ffffff"; // White

  const startColorIndex = Math.floor(Math.random() * colorArrayCopy.length);
  const startColor = colorArrayCopy.splice(startColorIndex, 1)[0];

  const endColorIndex = Math.floor(Math.random() * colorArrayCopy.length);
  const endColor = colorArrayCopy.splice(endColorIndex, 1)[0];

  // Define a random position for the middleColor between 10% and 90%
  const middleColorPosition = `${Math.random() * 80 + 10}%`;

  // Create the linear gradient with the random colors and positions
  return `linear-gradient(90deg, ${startColor} 0%, ${middleColor} ${middleColorPosition}, ${endColor} 100%)`;
}

// This one keeps the gradient on the nav elements

// Array.from(fileLinks).forEach(fileLink => {
//   fileLink.innerHTML = svg.file + fileLink.innerHTML;

//   fileLink.addEventListener('mouseleave', function (e) {
//     e.target.firstChild.firstChild.style.fill = normalColor;
//     e.target.style.color = normalColor;
//   });

//   fileLink.addEventListener('click', function (e) {
//     if (!e.target.classList.contains('highlight')) {
//       e.target.classList.add('highlight');
//       const gradient = generateGradient();
//       e.target.style.background = gradient;
//     } else {
//       e.target.classList.remove('highlight');
//       e.target.style.background = '';
//     }

//     const id = e.target.attributes.href.nodeValue.substring(1) 
//     const item = document.getElementById(id)
//     if (item.classList.contains('hidden')) {
//         item.classList.remove('hidden')
//     } else {
//         item.classList.add('hidden')
//     }
//   });
// });


    const fileLinkss = document.querySelectorAll('.files'); // Select all .files elements
    
    let selectedFileLink = null; // To keep track of the currently selected .files element
    
    fileLinkss.forEach(fileLink => {
        fileLink.innerHTML = svg.file + fileLink.innerHTML;
    
        fileLink.addEventListener('click', function (e) {
        if (selectedFileLink) {
            selectedFileLink.classList.remove('highlight'); // Remove highlight from the previous element
            selectedFileLink.style.background = ''; // Remove the gradient from the previous element
        }
    
        if (e.target !== selectedFileLink) {
            e.target.classList.add('highlight'); // Add highlight to the clicked element
            const gradient = generateGradient();
            e.target.style.background = gradient; // Apply the gradient to the clicked element
        } else {
            selectedFileLink = null; // If clicked again, remove the highlight
        }
    
        selectedFileLink = e.target; // Update the currently selected element
    
        const id = e.target.getAttribute('href').substring(1);
        const item = document.getElementById(id);
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
        });
    });
  

Array.from(fileLinks).forEach(fileLink => {

    fileLink.addEventListener('click', function (e) {
        if (!e.target.classList.contains('highlight')) {
            e.target.classList.add('highlight')
            setHighlightColor(e)
        } else {
            e.target.classList.remove('highlight')
            e.target.style.backgroundColor = ''
        }

        /*
        shows corresponding gallery item when link is clicked.
        id: id of the directory link and the gallery item to show
        item: gallery item to show
        */
        const id = e.target.attributes.href.nodeValue.substring(1) 
        const item = document.getElementById(id)
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden')
        } else {
            item.classList.add('hidden')
        }
    })
})

// Array.from(folderLinks).forEach(folderLink => {
//     // folderLink.innerHTML = svg.folder + folderLink.innerHTML

//     folderLink.addEventListener('mouseleave', function (e) {
//         e.target.firstChild.firstChild.style.fill = normalColor
//         e.target.style.color = normalColor
//     })


// })

Array.from(magicLinks).forEach(magicLink => {
    magicLink.innerHTML = svg.magic + magicLink.innerHTML

    magicLink.addEventListener('mouseenter', function (e) {
        e.target.firstChild.firstChild.style.fill = hoverColor
        e.target.style.color = hoverColor
    })
    magicLink.addEventListener('mouseleave', function (e) {
        e.target.firstChild.firstChild.style.fill = normalColor
        e.target.style.color = normalColor
    })
    magicLink.addEventListener('click', function (e) {
        if (!e.target.classList.contains('highlight')) {
            e.target.classList.add('highlight')
            setHighlightColor(e)
        } else {
            e.target.classList.remove('highlight')
            e.target.style.backgroundColor = ''
        }

        /*
        shows corresponding gallery item when link is clicked.
        id: id of the directory link and the gallery item to show
        item: gallery item to show
        */
        const id = e.target.attributes.href.nodeValue.substring(1) 
        const item = document.getElementById(id)
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden')
        } else {
             item.classList.add('hidden')
         }
    })
})

function setHeight() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}

function setHighlightColor(e) {
    let index = Math.floor(Math.random() * colorArray.length)
    e.target.style.backgroundColor = colorArray[index]
}

function setAutoHighlightColor() {
    let index = Math.floor(Math.random() * colorArray.length)
    let color = colorArray[index]
    document.documentElement.style.setProperty('--hl', color)
}



document.addEventListener("DOMContentLoaded", function() {
    var tree = document.querySelectorAll('.folders');
    
    for (var i = 0; i < tree.length; i++) {
        tree[i].addEventListener('click', function(e) {
            var parent = e.target.parentElement;
            var classList = parent.classList;
            if (classList.contains("open")) {
                classList.remove('open');
            } else {
                // Close all other open folders
                var openFolders = document.querySelectorAll('.folders.open');
                for (var j = 0; j < openFolders.length; j++) {
                    openFolders[j].parentElement.classList.remove('open');
                }
                classList.add('open');
            }
        });
    }
    
});

// function changeFooterContent(content) {
//     const footer = document.querySelector('footer');
//     footer.innerHTML = content;
// }

// // An array of image file names in your 'imgs/landing/' folder
// const imageFiles = ['IMG_2478.jpg', 'frommyrun.jpg', 'IMG_0104 2.jpg', 'IMG_0775.jpg', 'IMG_2075.jpg'];
// let currentIndex = 0;

// // Function to display the next image
// function displayNextImage() {
//     const imageDisplay = document.getElementById('image-display');
//     const imageUrl = 'imgs/landing/' + imageFiles[currentIndex];
//     imageDisplay.src = imageUrl;

//     currentIndex = (currentIndex + 1) % imageFiles.length;
// }

// // Initial display and set an interval to change images every 3 seconds
// displayNextImage();
// setInterval(displayNextImage, 3000);


// // Add event listeners to navigation links
// const navLinks = document.querySelectorAll('nav a');
// navLinks.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         const targetId = this.getAttribute('href').substring(1); // Remove the # symbol
//         const content = `Content for ${targetId}`;
//         changeFooterContent(content);
//     });
// });




// folderLink.addEventListener('click', function (e) {
//     if (!e.target.classList.contains('highlight')) {
//       e.target.classList.add('highlight');
//       const gradient = generateGradient();
//       e.target.style.background = gradient;
//     } else {
//       e.target.classList.remove('highlight');
//       e.target.style.background = '';
//     }})