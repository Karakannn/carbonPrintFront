import * as Yup from 'yup';

export const formValidation = Yup.object().shape({
    housing1: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing2: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing3: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing4: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing5: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing6: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing7: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing8: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing9: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),
    housing10: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),

    housing11: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required().min(1)
    }),


    //steptwo
    shop1: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),

    shop2: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop3: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop4: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop5: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop6: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop7: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop8: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop9: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),
    shop10: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required().min(1)
    }),


    //stepthree
    transportation1: Yup.string().when('step', {
        is: 3,
        then: schema => schema.required().min(1)
    }),
    transportation2: Yup.string().when('step', {
        is: 3,
        then: schema => schema.required().min(1)
    }),
    transportation3: Yup.string().when('step', {
        is: 3,
        then: schema => schema.required().min(1)
    }),

    //stepfour
    food1: Yup.string().when('step', {
        is: 4,
        then: schema => schema.required().min(1)
    }),
    food2: Yup.string().when('step', {
        is: 4,
        then: schema => schema.required().min(1)
    }),
    food4: Yup.string().when('step', {
        is: 4,
        then: schema => schema.required().min(1)
    }),
})