
export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Spicy Chicken Burger",
            price: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ytB7Anmn0GM1gQwPBjZo6rJn-fL_JXLY8A&s",
        },

        {
            id: 2,
            name: "Cheese Burger",
            price: 20,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1UFyD6wXEBl0CsrQ6raMDExq16eiq6m04Q&s",
        },

        {
            id: 3,
            name: "French Burger",
            price: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jhbpYT1FkmBT4CcY5rkEB28LLWABrWcptw&s",
        },

        {
            id: 4,
            name: "Beef Burger",
            price: 60,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J1lscOFdZj55mQCPmRQ4Me7fCGVZNDjN4w&s",
        },

        {
            id: 5,
            name: "ButterMilk Burger Burger",
            price: 70,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9Ul3pOilcAYPzDEsm_X_Fu03vmGVl6ONlw&s",
        },

        {
            id: 6,
            name: "Cajun Burger",
            price: 80,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FAp2YFNMNDMF_zKL3VsF-OUrH_5LIt6-UA&s",
        },
    ];

    res.status(200).json(products);

}