
export default function Result({ result }: { result: number }) {
    return (
        <div className='step-container'>

            <div className='sum'>
                <h2>Senin Puanın: </h2>
                <h3>{result}</h3>
            </div>
            <div className="general-info-wrapper">
                <h5>KARBON AYAK İZİN NE KADAR?</h5>
                <div className="general-info">
                    <b className='bold'>27-42</b>
                    puan aralığında düşük karbon salınımı.
                    Hiç fena değil gayet çevreci birisi olmalısın.
                </div>


                <div className="general-info">
                    <b className='bold'>42-58</b>
                    aralığında ortalama karbon salınımı
                    Biraz daha tasarruflu olmanı öneririz.
                </div>

                <div className="general-info">
                    <b className='bold'>58-73</b>
                    aralığında ise yüksek karbon salınımı
                    Dünyamıza daha fazla karbon salınımı yapmamaya özen gösterelim.
                </div>

            </div>
        </div>
    )
}
