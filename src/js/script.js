let personalInfo = [
  {
    id: '1',
    first_name: 'John',
    last_name: 'Doe',
    fathers_name: 'Hohn',
    comments: ['test', 'test2']
  },
  {
    id: '2',
    first_name: 'Jane',
    last_name: 'Doe',
    fathers_name: 'Hohn',
    comments: []
  },
  {
    id: '3',
    first_name: 'Peter',
    last_name: 'Kowalski',
    fathers_name: 'Piiiddi',
    comments: ['drr']
  }
]


function showPostsOnPage(posts, id) {
  // 1. Forming the HTML for the post
  let html = '';
  posts.forEach((post) => {
    let commentsCode = '';
    post.comments.forEach((comment) => {
      commentsCode += `
        <p>${comment}</p> 
      `
    })
    const { id, first_name, last_name, fathers_name, comments } = post;
    html += `
    <div id="${id}" class="person__card">
      <h1 class="person__card_initials">${last_name} ${first_name[0]}. ${fathers_name[0]}.</h1>
      <p class="person__card_comments">${comments}</p>
      <button class="add_comments_btn">Add Comment</button>
    </div>
    `
  })
  // 2. Inserting the HTML into the DOM
  const TARGET = document.getElementById(id);
  TARGET.innerHTML = html;
}


function changeTextToCapitalize(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function showPersonalInfo(content, id) {
  if (id === 'first_name' || id === 'fathers_name') {
    content = content[0].toUpperCase() + ".";
  }
  const ELEMENT = document.getElementById(`output_${id}`);
  ELEMENT.innerHTML = changeTextToCapitalize(content);
}

// start of the script
function getPersonalInfo(e) {
  const VALUE = e.target.value;
  const ID_ELEMENT = e.target.id;
  showPersonalInfo(VALUE, ID_ELEMENT);
}

document.addEventListener('DOMContentLoaded', () => {
  showPostsOnPage(personalInfo, 'posts');

  const ADD_COMMENT_BTN = document.querySelectorAll('.add_comments_btn');
  ADD_COMMENT_BTN.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      alert('Add comment');
      //1. Get the id of the post parent
      const ID = e.target.parentElement.id;
      console.log(ID);
    })
  });
});

