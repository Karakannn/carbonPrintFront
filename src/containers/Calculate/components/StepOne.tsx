import FormikSelect from '../../../components/FormikSelect/FormikSelect';

export default function StepOne() {

    return (
        <div className='step-container'>
            <FormikSelect label='1. Ev tipiniz? Yaşadığınız yer?' name='housing1'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="0">Müstakil ev</option>
                <option value="0">Daire</option>
                <option value="0">Öğrenci </option>
            </FormikSelect>


            <FormikSelect label='2. Evde yaşayan kişi sayısı' name='housing2'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="0">0</option>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">3 ve daha fazla</option>
            </FormikSelect>


            <FormikSelect label='3. Evinizde kullandığınız ısıtma sistemi nedir?' name='housing3'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Jeotermal</option>
                <option value="2">Doğalgaz</option>
                <option value="3">Elektrik</option>
                <option value="4">Kömür</option>
            </FormikSelect>

            <FormikSelect label='4. Ne sıklıkla duş alırsınız?' name='housing4'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Haftada 1 kez</option>
                <option value="2">Haftada 2 kez</option>
                <option value="3">Haftada 3 kez</option>
                <option value="4">Haftada 4 kez ve daha fazla</option>
            </FormikSelect>

            <FormikSelect label='5. Evde/yaşadığınız yerde yalıtım var mı?' name='housing5'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Hayir</option>
            </FormikSelect>

            <FormikSelect label='6. Televizyon-bilgisayar vb. elektrikli gereçleri kullanımdan sonra tamamen kapatır mısınız yoksa bekleme moduna mı alırsınız? ' name='housing6'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Tamamen kapatırım</option>
                <option value="2">Bekleme moduna alırım</option>
            </FormikSelect>

            <FormikSelect label='7. Odanızda kaç adet ampül var?' name='housing7'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3 ve daha fazla</option>
            </FormikSelect>

            <FormikSelect label='8. Odadan çıkarken ışıkları kapatır mısın?' name='housing8'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Bazen</option>
                <option value="3">Hayir</option>
            </FormikSelect>

            <FormikSelect label='9. Telefon ve bilgisayar gibi gereçleri uzun süre şarjda bırakmam.' name='housing9'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Bazen</option>
                <option value="3">Hayir</option>
            </FormikSelect>

            <FormikSelect label='10. Evde uzun süre bulunmadığımda kombi vb. kapatırım.' name='housing10'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Bazen</option>
                <option value="3">Hayir</option>
            </FormikSelect>

            <FormikSelect label='11. Metal, plastik, cam veya kağıt gibi öğeleri geri dönüştürüyor musunuz?' name='housing11'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Hayir</option>
            </FormikSelect>
        </div>
    )
}
