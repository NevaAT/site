const BottomContacts = props => <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto my-16 space-x-6">
  <div>
    <img src="/favicon_black_sq.png" alt="logo bottom" className="mt-0 h-[56px]" />
  </div>
  <div>
    <a href="https://www.facebook.com/nevaautomatization/" target="_blank">
      <img src="/images/fb.svg" alt="facebook" />
    </a>
  </div>
  <div className="py-4 flex justify-center">
    <img src="/images/phone.svg" alt="phone" />
    <div className="ml-4 grid place-self-center">
      <div className="grid justify-end grid-rows-2 text-sm text-bluegray-300">
        <a href="tel:+78122411480">(812) 241-14-80</a>
        <a href="tel:+79500118888">(950) 011-88-88</a>
      </div>
    </div>
  </div>
  <div className="py-4 flex justify-center">
    <img src="/images/mail.svg" alt="phone" />
    <div className="ml-4 grid place-self-center text-bluegray-300">info@nevaat.ru</div>
  </div>
</div>

export default BottomContacts