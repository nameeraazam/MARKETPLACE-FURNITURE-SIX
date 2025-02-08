export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'firstname',
            type: 'string',
            title: 'FirstName'

        },
        {
            name: 'lastname',
            type: 'string',
            title: 'LastName'

        },
        {
            name: 'phone',
            type: 'number',
            title: 'Phone',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'streetNumber',
            type: 'number',
            title: 'StreetNumber',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country',
        },
        {
            name: 'postalzipcode',
            type: 'number',
            title: 'PostalzipCode',
        },
        {
            name: 'shippingMethod',
            type: 'string',
            title: 'ShippingMethod',
        },
        {
            name: 'cartitems',
            title: 'CartItems',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'food' } }]
        },
        {
            name: 'total',
            type: 'number',
            title: 'Total'
        },
        {
            name: 'orderDate',
            type: 'datetime',
            title: 'Order Date'
        },
        {
            name: 'discount',
            type: 'number',
            title: 'Discount'
        },


        {
            name: 'order',
            type: 'string',
            title: 'Order Current Status',
            options: {
                list: [
                    { title: 'pending', value: 'pending' },
                    { title: 'success', value: 'success' },
                    { title: 'dispatched', value: 'dispatched' },
                ],
                layout: 'radio'
            },
            InitialValue: 'pending'

        }
    ]
}