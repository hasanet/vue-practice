const userGoal = Vue.createApp ( {
    data () {
        return {
            courseGoal: "ABC",
            courseLink: "https://m-hasan.com"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ) {
                return this.courseGoal;
            } else {
                return 'ABC';
            }
        }
    }
});

userGoal.mount('#user-goal');

// const app = Vue.createApp ({
//     data () {
//         return {
//             courseGoal: 'My Course Goal',
//             courseLink: 'https://m-hasan.com'
//         };
//     },
//     methods: {
//         outputGoal() {
//             const randomNumber = Math.random();
//             if (randomNumber < 0.5) {
//                 return this.courseGoal;
//             } else {
//                 return "XYZ";
//             }
//         }
//     }
// });

// app.mount('#user-goal');