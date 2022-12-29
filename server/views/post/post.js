const content = document.querySelector('#content-holder');

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
  
 quill.setContents(JSON.parse(content.innerText).postFull);
 //console.log(JSON.parse(content.innerText))
 

 let postBody = document.getElementById('post-body');
 
 postBody.innerHTML = quill.root.innerHTML;

 hljs.configure({   // optionally configure hljs
    languages: ['javascript', 'ruby', 'python']
  });

hljs.highlightAll();