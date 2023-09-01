import React from 'react'
import FormikSelect from '../../../components/FormikSelect/FormikSelect'

export default function StepThree() {
    return (
        <div className='step-container'>
            <FormikSelect label='1. Okula nasıl gidiyorsunuz?' name='transportation1'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">Bisiklet/Yürüyerek</option>
                <option value="2">Servis/Otobüs</option>
                <option value="3">Özel araç </option>
            </FormikSelect>

            <FormikSelect label='2. Bir yılda uçağa kaç kez biniyorsunuz?' name='transportation2'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">0</option>
                <option value="2">1</option>
                <option value="3">2-3</option>
                <option value="4">4 ve daha fazla</option>
            </FormikSelect>

            <FormikSelect label='3. Bir haftada ortalama, otobüs veya servisle ne kadar yol gidersiniz?' name='transportation3'>
                <option value="">Lütfen seçiminizi yapınız...</option>
                <option value="1">30 dakika ve daha az</option>
                <option value="2">30-60 dakika</option>
                <option value="3">60-90 dakika</option>
                <option value="4">90 dakika ve üzeri</option>
            </FormikSelect>
        </div>
    )
}
