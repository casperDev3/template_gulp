let POSTS = [
  {
    id: 1,
    title: 'Post 1',
    body: 'Post 1 body',
    price: 300,
    comments: [
      'Comment 1', 'Comment 2', 'Comment 3'
    ]
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'Post 2 body',
    price: 400,
    comments: [
      'Comment 1', 'Comment 2', 'Comment 3'
    ]
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'Post 3 body',
    price: 500,
    comments: [
      'Comment 1', 'Comment 2', 'Comment 3'
    ]
  }
]

function showPostsOnPage(posts) {
  // 1. Forming the HTML for the post
  let html = '';
  posts.forEach((post) => {
    html += `
    <div id="${post.id}" class="item">
      <h2 class="item__title">${post.title}</h2>
      <p class="item__price">${post.price}</p>
      <p class="item__text">${post.body}</p>
    </div>`
  })
  // 2. Inserting the HTML into the DOM
  const TARGET = document.querySelector('#posts_list');
  TARGET.innerHTML = html;
}
function addPost(e) {
  e.preventDefault();
  // 1. Getting the data from the form
  const TITLE = document.getElementById('title').value
  const BODY = document.getElementById('description').value
  const PRICE = document.getElementById('price').value
  // 2. Forming the post object
  const POST = {
    id: POSTS.length + 1,
    title: TITLE,
    body: BODY,
    price: PRICE,
    comments: []
  }
  // 3. Adding the post to the array
  POSTS.push(POST)
  // 4. Showing the posts on the page
  showPostsOnPage()
  // 5. Clearing the form
  const FORM = document.querySelector('form');
  FORM.reset();
}

function showTextArea() {
  // 1. Getting checkbox checked status
  const CHECKBOX = document.getElementById('show_textarea');
  const CHECKED = CHECKBOX.checked;
  const TEXTAREA = document.getElementById('content');
  console.log(CHECKED);

  // if(CHECKED){
  //   TEXTAREA.classList.add('show');
  // }else{
  //   TEXTAREA.classList.remove('show');
  // }
  CHECKED ? TEXTAREA.classList.add('show') : TEXTAREA.classList.remove('show');
}

function filterPostsByPrice(e) {
  e.preventDefault();
  function filter() {
    const FILTERED_POSTS = POSTS.filter((post) => {
      return post.price >= MIN_PRICE;
    });
    showPostsOnPage(FILTERED_POSTS);
  }
  function displayNotificationUser() {
    alert('Please input price!');
  }
  const MIN_PRICE = document.getElementById('filter_price').value;
  MIN_PRICE.length == 0 || Number(MIN_PRICE) <= 0 ? displayNotificationUser() : filter();
}

document.addEventListener('DOMContentLoaded', () => {
  showPostsOnPage(POSTS);
})


const BURGER_MENU = document.querySelector('.burger_menu');
const MOBILE_MENU = document.querySelector('.mobile__menu');
const HEADER = document.querySelector('header');
const MOBILE_MENU_LINKS = document.querySelectorAll('.mobile__menu a');

const switchMobileMenu = () => {
  BURGER_MENU.classList.toggle('active');
  MOBILE_MENU.classList.toggle('active');
  HEADER.classList.toggle('active');
};

BURGER_MENU.addEventListener('click', () => {
  switchMobileMenu();
})

MOBILE_MENU_LINKS.forEach((link) => {
  link.addEventListener('click', () => {
    switchMobileMenu();
  })
})




// showelement on scroll
document.addEventListener('scroll', () => {
  const ELEMENT = document.querySelector('.scroll-up');
  // display scroll up button after 100px
  if (window.scrollY > 20) {
    ELEMENT.classList.add('show');
  } else {
    ELEMENT.classList.remove('show');
  }
})

const FRUITS = [
  {
    id: 1,
    name: 'Apple',
    price: 500,
  },
  {
    id: 2,
    name: 'Orange',
    price: 200,
  },
  {
    id: 3,
    name: 'Banana',
    price: 300,
  }
];
const ELECTRONICS = [
  {
    id: 1,
    name: 'Laptop',
    price: 1000,
  },
  {
    id: 2,
    name: 'Phone',
    price: 2000,
  },
  {
    id: 3,
    name: 'TV',
    price: 3000,
  }
];
const PRODUCTS = [...ELECTRONICS, ...FRUITS];

const TABS = document.querySelectorAll('.tabs__item');
const CONTENT = document.querySelectorAll('.tabs__content');

function showProductsOnPage(selector, array) {
  let html = '';
  array.forEach((item) => {
    html += `
    <div class="item" id="${item.id}">
      <h2 class="item__title">${item.name}</h2>
      <p class="item__price">${item.price}</p>
    </div>`
  });
  const TARGET = document.querySelector(selector);
  TARGET.innerHTML = html;
}


TABS.forEach((tab) => {
  tab.addEventListener('click', () => {
    TABS.forEach((tab) => {
      tab.classList.remove('selected');
    });
    tab.classList.add('selected');
    const DATA_ATTRIBUTE = tab.getAttribute('data-products');
    CONTENT.forEach((item) => {
      item.classList.add('d-none');
      if (item.getAttribute('data-products') == DATA_ATTRIBUTE) {
        item.classList.remove('d-none');
      }
    });
  })
});

document.addEventListener('DOMContentLoaded', () => {
  showProductsOnPage('#fruits', FRUITS);
  showProductsOnPage('#electronics', ELECTRONICS);
  showProductsOnPage('#all_products', PRODUCTS);
})

const ABS_BTN = document.querySelector('#abs');
ABS_BTN.addEventListener('click', () => {
  const SELECTED_TAB = document.querySelector('.tabs__item.selected');
  const DATA_ATTRIBUTE = SELECTED_TAB.getAttribute('data-id');
  if (DATA_ATTRIBUTE == 'fruits') {
    FRUITS.sort((a, b) => {
      return a.price - b.price;
    });
    showProductsOnPage('#fruits', FRUITS);
  } else if (DATA_ATTRIBUTE == 'electronics') {
    ELECTRONICS.sort((a, b) => {
      return a.price - b.price;
    });
    showProductsOnPage('#electronics', ELECTRONICS);
  }else{
    PRODUCTS.sort((a, b) => {
      return a.price - b.price;
    });
    showProductsOnPage('#all_products', PRODUCTS);
  }
});


