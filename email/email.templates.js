// This file is exporting an Object with a single key/value pair.
// However, because this is not a part of the logic of the application
// it makes sense to abstract it to another file. Plus, it is now easily 
// extensible if the application needs to send different email templates
// (eg. unsubscribe) in the future.
module.exports = {

  confirm: id => ({
    subject: 'Welcome to well women',
    html: `
      <div class="app font-sans min-w-screen min-h-screen bg-grey-lighter py-8 px-4">

  <div class="mail__wrapper max-w-md mx-auto">

    <div class="mail__content bg-white p-8 shadow-md">

      <div class="content__header text-center tracking-wide border-b">
        <div class="text-red text-sm font-bold">Well women</div>
        <h1 class="text-3xl h-48 flex items-center justify-center">E-mail Confirmation</h1>
      </div>

      <div class="content__body py-8 border-b">
        <p>
          Hey, <br><br>It looks like you just signed up for The App, that’s awesome! Can we ask you for email confirmation? Just click the button bellow.
        </p>
        <button class="text-white text-sm tracking-wide bg-red rounded w-full my-8 p-4 ">
        <a href='http://wellwomen.herokuapp.com/confirm/${id}'>
          CONFIRM EMAIL ADRESS
        </a>
        </button>
        <p class="text-sm">
          Keep Rockin'!<br> Your The App team
        </p>
      </div>

      <div class="content__footer mt-8 text-center text-grey-darker">
        <h3 class="text-base sm:text-lg mb-4">Thanks for using The App!</h3>
        <p>https://wellwomen.herokuapp.com</p>
      </div>

    </div>

    
    `   
  })
  
}