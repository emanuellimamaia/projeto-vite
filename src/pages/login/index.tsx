import './style.css'
import uea from '../../assets/uea.png'
export default function () {
  return (
    <div className='page-login'>
      <main>
        <div className='title'>
          <img src={uea} alt=' foto uea' />
          <h2>
            Faça Login na sua conta UEA
          </h2>
        </div>
        <div className='form-login'>
          <input placeholder='email' type='email' />
          <input placeholder='senha' type='password' />
        </div>
        <div className='buttons'>
          <button className='btn-submit'>Registrar</button>
          <button className='btn-submit'>Login</button>
        </div>
      </main>
    </div>
  )
}