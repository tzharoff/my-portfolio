export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'approved',
            type: 'boolean',
            title: 'Approved',
            description: "Comments won't show without approval.", 
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'comment',
            type: 'text',
            title: 'Comment'
        },
        {
            name: 'post',
            type: 'reference',
            title: 'Reference',
            to: [{
                type: 'post',
            }]
        }
    ],
    preview: {
        select: {
            name: 'name',
            comment: 'comment',
            post: 'post.title'
        },
        prepare({name, comment, post}) {
            return {
                title: `${name} on ${post}`,
                subtitle: comment
            }
        }
    }
}