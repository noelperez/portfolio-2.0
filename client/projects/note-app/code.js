let list = document.querySelector('select');
        let note = document.querySelector('textarea');
        let btn = document.querySelector('#btn');
        let btnDelete = document.querySelector('#btndelete');

        let state = JSON.parse(localStorage.getItem('Notes')) || {
            notes: {
                'Empty Shopping List': 'Two grapes. Mush and more'
                
            },
            selected: 'Empty Shopping List'
        };



        function setState(newState) {
            list.textContent = '';


            for (let name of Object.keys(newState.notes)) {
                let option = document.createElement('option');
                option.textContent = name;

                if (name == newState.selected) option.selected = true;
                list.appendChild(option);
            }

            note.value = newState.notes[newState.selected] || "";

            localStorage.setItem('Notes', JSON.stringify(newState));

            state = newState;

        }

        list.addEventListener('change', event => {
            setState({ notes: state.notes, selected: event.target.value });
        });

        note.addEventListener('change', event => {
            if (Object.keys(state.notes).length == 0) return;
            setState({
                notes: Object.assign({}, state.notes, { [state.selected]: event.target.value }),
                selected: state.selected
            })
        })

        btn.addEventListener('click', () => {
            let name = prompt('Please enter a list name');
            
            if ( Object.keys(state.notes).includes(name)) {
                alert('This note name is already in use, select a different name.');
                return;
            }

            if (name) {
                setState({
                    notes: Object.assign({}, state.notes, { [name]: '' }),
                    selected: name
                })
            } else {
                alert('Please enter a list name');
            }


        });

        btnDelete.addEventListener('click', () => {

            // If there isn't notes.
            if (Object.keys(state.notes).length == 0) return;

            alert('Are you sure you want to delete this note? This action is irreversible.')
            let filtered = Object.keys(state.notes).filter( n => n != state.selected);
            let notes = {};
            for (let name of filtered) {
                notes = Object.assign({}, notes, {[name]: state.notes[name]});
            }
            setState({
                notes,
                selected: filtered[filtered.length - 1]

            })
             


        })



        setState(state);