import Form from '@/components/Form';
import Stars from '@/components/StarsCanvas';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';

const Contact = () =>{
      return (
         <section>
             <div className='container mx-auto'>

                  {/*text & illustration */}

                  <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:md-24'>

                  {/* text*/}

                  <div className='flex flex-col justify-center'>

                  <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>

                  <span className='w-[30px] h-[2px] bg-primary'></span>

                  Say Hello 

                  </div>
                  <h1 className='h1 max-w-md mb-8'>Let's connect</h1>
                  <p className='subtitle max-w-[400px]'>
                  Please use the form below to contact me, or feel free to connect with me through the social media platforms listed. I look forward to hearing from you!
                  </p>

                  </div>
                  <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
                  </div>

                  {/* info text & form */}

                        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
                          <div className='flex flex-col gap-y-4 xl:gap-y-7 mb-12 xl:mb-24 text-base'>
                              <div className='flex items-center gap-x-8'>
                                <MailIcon size={18} className='text-primary' />
                                <div>kpolavar@usc.edu</div>
                              </div>


                              <div className='flex items-center gap-x-8'>
                                <HomeIcon size={18} className='text-primary' />
                                <div>720 West Los Angeles, California , 90007</div>
                              </div>


                        
                            </div>
                            <Form/>
                          </div>
             </div>
             <Stars/>
        </section>

     );
};

export default Contact;