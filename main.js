let students = [
    {
        id: '',
        name: "Іванюк Іван Михайлович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: true,
    },
    {
        id: '',
        name: "Матицин Кіріл Олексійович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Духовченко Дмитро Вікторович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: true,
    },
    {
        id: '',
        name: "Корнієнко Владислав Віталійович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Стичук Анастасія Валеріївна",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Литвин Дмитро Костянтинович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
    {
        id: '',
        name: "Шрамко Владислав Вячеславович",
        group: "РПЗ 19 1/9",
        year: "2004",
        pr: false,
    },
];

var studArray = new Vue ({
    el: '#studArray',
    data: {
        stud: students.slice(),
        filter_name: '',
    },
    methods: {
        delete_stud: function(row) {
            for (let i = 0; i < this.stud.length; i++) {
                if (Number(i) === Number(row)) {
                    this.stud.splice(i,1);
                }
            }
        }
    }
});