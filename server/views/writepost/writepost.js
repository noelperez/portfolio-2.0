
const quill = new Quill('#editor', {
  modules: {
    syntax: true,
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'video', 'code-block', 'blockquote', 'link'],
        [{ list: 'ordered' }, { list: 'bullet' }]
      ]
    },
  theme: 'snow'
});

hljs.configure({   // optionally configure hljs
  languages: ['javascript']
});

//hljs.highlightAll();




  let form = document.querySelector('form');
  form.onsubmit = (e) => {

    const content = document.querySelector('input[name=content]');
    content.value = JSON.stringify({ postShort: `${quill.getText().slice(0, 200)}`, postFull: quill.getContents() });
    
    console.log(`content value: ${content}, content innerText ${content.innerText}`);
    console.log(`quill text value: ${quill.getText()}`);
    return true;
    


    
    
    
    
  }
 

  