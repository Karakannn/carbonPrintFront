import React from 'react'
import FormikSelect from '../../../components/FormikSelect/FormikSelect'

export default function StepTwo() {
    return (
        <div className='step-container'>
            <FormikSelect label='1. Alışverişi çoğunlukla nereden yapıyorsunuz?' name='shop1'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Mahalle marketinden</option>
                <option value="2">Sanal marketten</option>
                <option value="3">Yaşadığım yere uzak AVM'den </option>
            </FormikSelect>

            <FormikSelect label='2. Haftada kaç kez AVM’ye gidersiniz?' name='shop2'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3 ve daha fazla</option>
            </FormikSelect>

            <FormikSelect label='3. Elektrikli araç gereç satın alırken çevre dostu olup olmadığına dikkat eder misiniz?' name='shop3'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Bazen</option>
                <option value="3">Hayir</option>
            </FormikSelect>

            <FormikSelect label='4. 1 yılda giyim, tekstil ve ayakkabı alışverişine yaklaşık ne kadar harcama yaparsınız ?' name='shop4'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">3.000 TL' den az</option>
                <option value="2">3.000 TL' den fazla</option>
            </FormikSelect>


            <FormikSelect label='5. 1 yılda kâğıt bazlı ürünler (örn. kitaplar, dergiler, gazeteler) alışverişlerinde yaklaşık ne kadar harcama yaparsınız ?' name='shop5'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">1.000 TL'den az</option>
                <option value="2">1.000 TL ve üzeri</option>
            </FormikSelect>


            <FormikSelect label='6. 1 yılda Televizyon, radyo ve telefon vb. ekipman alışverişlerinde yaklaşık ne kadar harcama yaparsınız ?' name='shop6'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">10.000 TL' den az</option>
                <option value="2">10.000 TL' den fazla</option>
            </FormikSelect>

            <FormikSelect label='7. 1 yılda bilgisayar ve ekipman alışverişlerine yaklaşık ne kadar harcama yaparsınız ?' name='shop7'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">10.000 TL' den az</option>
                <option value="2">10.000 TL' den fazla</option>
            </FormikSelect>

            <FormikSelect label='8. 1 yılda restoranlar ve kafelere yaklaşık ne kadar harcama yaparsınız ?' name='shop8'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">5.000 TL' den az</option>
                <option value="2">5.000 TL' den fazla</option>
            </FormikSelect>

            <FormikSelect label='9. 1 yılda rekreasyonel, kültürel ve sportif faaliyetlere yaklaşık ne kadar harcama yaparsınız ?' name='shop9'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">1.000 TL' den az</option>
                <option value="2">1.000 TL' den fazla</option>
            </FormikSelect>


            <FormikSelect label='10. 1 ayda yiyecek ve içecek ürünlerine yaklaşık ne kadar harcama yaparsınız ?' name='shop10'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">4000 TL' den az</option>
                <option value="2">4000 TL' den fazla</option>
            </FormikSelect>
        </div>
    )
}
