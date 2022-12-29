 const posts = [
    {
        _id: Math.random().toString(36).slice(2),
        title: 'The art of learning constantly',
        tags: [],
        author: { _id: Math.random().toString(36).slice(2), name: 'Jorge' },
        comments: [],
        createdAt: '2022-12-09',
        visits: 5,
        updatedAt: '2022-12-09',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    },
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Persuing your dreams... and never stopping.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Noel' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Lucas", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        updatedAt: '2022-12-06',
        visits: 5,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }
    ,
    {
        _id: Math.random().toString(36).slice(2),
        title: 'Functional programming VS Object Oriented Programming.',
        tags: ['programming', 'technology', 'finTech'],
        author: { _id: Math.random().toString(36).slice(2), name: 'Andrew' },
        comments: [ 
            { 
                author: { _id: Math.random().toString(36).slice(2), name: "Noel", profilePic: 'base64 String'},
                comment: `This is the comments' content`,
                likes: 5,
                createdAt: '2022-12-5'
            }
        ],
        createdAt: '2022-12-03',
        visits: 5,
        updatedAt: '2022-12-06',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti rem atque libero quidem adipisci, fugit doloremque quibusdam ipsam dolore quisquam omnis soluta, sunt nemo, officia accusantium obcaecati molestiae provident!
        Quisquam expedita adipisci animi sunt quod ipsa harum? Aperiam, at? Pariatur tempora, nemo ea dolorum dolore architecto voluptate repellat vel, dicta eius rem velit, asperiores totam deleniti enim aliquid doloribus.
        Dolorem nemo laudantium, ipsum enim quo aperiam cupiditate veritatis perferendis eius reprehenderit impedit consequatur maxime illum quod, commodi assumenda! Voluptate sint corrupti ipsa saepe expedita quo nam excepturi. Voluptatem, optio?
        Alias molestiae voluptatem doloribus enim minus tempora! Quia dolorum labore facilis, laborum illum facere officiis eius deleniti. Cum perferendis, debitis cumque rerum deleniti quod architecto nulla obcaecati reiciendis, velit in.
        Veritatis, quae mollitia sequi quia omnis voluptatem obcaecati in aliquid illo, soluta eaque unde ab. Eum voluptatibus culpa saepe accusantium aliquam. Magnam consequuntur omnis nulla modi voluptas alias, aliquid maiores.`

    }

];

export default posts;