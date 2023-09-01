import React from 'react'
import FormikSelect from '../../../components/FormikSelect/FormikSelect'

export default function StepFour() {
    return (
        <div className='step-container'>
            <FormikSelect label='1. Beslenme şekliniz nasıldır?' name='food1'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Sebze meyve ağırlıklı</option>
                <option value="2">Beyaz et ağırlıklı olarak</option>
                <option value="3">Eşit ağırlıklı olarak </option>
                <option value="4">Kırmızı et ağırlıklı olarak </option>
            </FormikSelect>

            <FormikSelect label='2. Gıdaları mevsiminde mi tüketirsiniz? ' name='food2'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Bazen</option>
                <option value="3">Hayır</option>
            </FormikSelect>

            <FormikSelect label='3. Bir haftada ortalama… kez dışarıda yemek yiyorum.' name='food3'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">0</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3 ve daha fazla</option>
            </FormikSelect>


            <FormikSelect label='4. Artan yemekleri çöpe atmam.' name='food4'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Bazen</option>
                <option value="3">Hayır</option>
            </FormikSelect>


            <FormikSelect label='5. Ambalaj atıklarını geri dönüşüme kazandırmaya çalışırım.' name='food5'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Evet</option>
                <option value="2">Bazen</option>
                <option value="3">Hayır</option>
            </FormikSelect>

        </div>
    )
}
