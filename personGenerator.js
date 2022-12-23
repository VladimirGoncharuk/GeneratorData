const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstMALENameJson: `{
        "count": 11,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Владимир"
        }
    }`,
    firstFEMALENameJson: `{
        "count": 12,
        "list": {     
            "id_1": "Александра",
            "id_2": "Карина",
            "id_3": "Марина",
            "id_4": "Иванна",
            "id_5": "Анна",
            "id_6": "Елена",
            "id_7": "Мария",
            "id_8": "Олеся",
            "id_9": "Наталья",
            "id_10": "София",
            "id_11": "Анастасия",
            "id_12": "Виктория"
        }
    }`,
      
   
        jobMALEJson: `{
            "count": 11,
            "list": {     
                "id_1": "Водитель",
                "id_2": "Монтажник",
                "id_3": "Менеджер",
                "id_4": "Предприниматель",
                "id_5": "Прокурор",
                "id_6": "Механик",
                "id_7": "Курьер",
                "id_8": "Токарь",
                "id_9": "Слесарь",
                "id_10": "Плотник",
                "id_11": "Генеральный директор"
            }
        }`,
        jobFEMALEJson: `{
            "count": 11,
            "list": {     
                "id_1": "Доярка",
                "id_2": "Старший продавец",
                "id_3": "Пресс-секретарь",
                "id_4": "Врач",
                "id_5": "Педагог",
                "id_6": "Педиатр",
                "id_7": "Учитель",
                "id_8": "Стюардесса",
                "id_9": "Актриса театра",
                "id_10": "Повар",
                "id_11": "Воспитатель"
            }
        }`,
        birthMonthJson: `{
            "count": 12,
            "list": {     
                "id_1": "Января",
                "id_2": " Февраля ",
                "id_3": "Марта",
                "id_4": "Апреля ",
                "id_5": "Мая",
                "id_6": "Июня ",
                "id_7": "Июля",
                "id_8": "Августа",
                "id_9": "Сентября ",
                "id_10": "Октября",
                "id_11": "Ноября ",
                "id_12": "Декабря"
            }
        }`,
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    

    randomFirstName: function() {
     
    
    if (this.randomIntNumber()===1) {

         this.person.gender = 'Мужчина';
        return this.randomValue(this.firstMALENameJson);
}
         this.person.gender = 'Женщина';
         return this.randomValue(this.firstFEMALENameJson);
        
    },

    
     randomSurname: function() {
     if   (this.person.gender === 'Женщина'){
        return `${this.randomValue(this.surnameJson)}a`
     }


        return this.randomValue(this.surnameJson);

    },
    randomborn: function() {   
   
           return ` ${this.randomIntNumber(1950,2020)} года рождения, \n ` ;
   
       },

    randomPatronymic: function() {  
        const Patronymic= this.randomValue(this.firstMALENameJson);
      
        if   (this.person.gender === 'Женщина'){ 
            if(Patronymic.substr(-1, 1)==='й'){
            return `${Patronymic.replace(/.$/,'евна')}`
        } else if(Patronymic.substr(-1, 1)==='а'){
            return `${Patronymic.replace(/.$/,'ична')}`
        }
        return `${Patronymic}овна`
         }else if(Patronymic.substr(-1, 1)==='й'){
            return `${Patronymic.replace(/.$/,'евич')}`
        } else if(Patronymic.substr(-1, 1)==='а'){
            return `${Patronymic.replace(/.$/,'ич')}`
        }
        return `${Patronymic}ович` 
   
       },
       randomjob: function() {  
        const job = this.person.birthYear;
        if ((2022 - parseInt(job)) < 18){
            return " Не подлежит трудоустройству"
        }else if   (this.person.gender === 'Женщина'){
            
            return this.randomValue(this.jobFEMALEJson);  
   
         } 
            return this.randomValue(this.jobMALEJson);  
   
        },

        randomMonth: function() {   
          const Month = this.randomValue(this.birthMonthJson);
       
          if(Month.substr(0, 1)==0){
       return `\n ${Month.replace('я ','ь')}`;   // выделен для возможноcти генерации дней февраля
 }                                                          

       if(Month.substr(-1, 1)==0){
        
        return `\n ${Month.replace('я ','ь')}`; 
       }

            
        return `\n ${this.randomIntNumber(31, 1)} ${Month}`; 
   
        },
 


        

    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear =this.randomborn();
        this.person.Patronymic =this.randomPatronymic();
        this.person.job =this.randomjob();
        this.person.birthMonth =this.randomMonth();
        return this.person;
    }
    
};
