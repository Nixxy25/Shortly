import { CustomButton } from '../Buttons/buttons';

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between mx-24 my-10 max-sm:my-4 max-sm:mx-6'>
            <div className='flex gap-12 font-bold items-center text-[15px] font-[700] '>
                <a href="" target="_blank" className='text-3xl text-Very-Dark-Blue'>Shortly</a>

                <div className='flex gap-12 max-lg:hidden'>
                  <a href="" target="_blank">Features</a>
                  <a href="" target="_blank">Pricing</a>
                  <a href="" target="_blank">Resources</a>
                </div>
            </div>

            <div className='flex gap-8 max-lg:hidden'>
              <CustomButton variant='secondary'><p className='text-[15px]'>Login</p></CustomButton>
              <CustomButton variant='primary'><p className='text-[15px]'>Sign Up</p></CustomButton>
            </div>
        </div>
    </div>
  )
}

export default Navbar;