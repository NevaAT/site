const BottomContacts = ({phones}) => <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto my-16 space-x-6">
  <div>
    <img src="/favicon_black_sq.png" alt="logo bottom" className="mt-0 h-[56px]" />
  </div>
  <div>
    <a href="https://www.facebook.com/nevaautomatization/" target="_blank">
      <img src="/images/fb.svg" alt="facebook" />
    </a>
  </div>
  <div className="flex justify-center py-4">
    <img src="/images/phone.svg" alt="phone" />
    <div className="grid ml-4 place-self-center">
      <div className="grid justify-end grid-rows-2 text-sm text-bluegray-300">
        <a href={phones[0] && phones[0].link}>{phones[0] && phones[0].shown}</a>
        <a href={phones[1] && phones[1].link}>{phones[1] && phones[1].shown}</a>
      </div>
    </div>
  </div>
  <div className="flex justify-center py-4">
    <img src="/images/mail.svg" alt="phone" />
    <div className="grid ml-4 place-self-center text-bluegray-300">info@nevaat.ru</div>
  </div>
</div>

export default BottomContacts