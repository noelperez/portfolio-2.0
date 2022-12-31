const content = document.querySelector('#content-holder');
const form = document.querySelector('form');
let postBody = document.getElementById('post-body');

 const quill = new Quill('#editor', {
    modules: {
        syntax: true,
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['code-block', 'link', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }]
        ]
      },
    theme: 'snow'
  });

  hljs.configure({   // optionally configure hljs
    languages: ['javascript', 'ruby', 'python']
  });

  
 quill.setContents(JSON.parse(content.innerText).postFull);
 postBody.innerHTML = quill.root.innerHTML;
 console.log('hello there')

 form.onsubmit = (e) => {
   e.preventDefault();
   
   return e.target.content.value === '' ? false : e.target.submit();
 
  }
 


 
 


