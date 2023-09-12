import React, { useState } from 'react'
import { media } from '../../utils/data';
import ImageSlider from './ImageSlider';
import Modal from '../modal/Modal';
import { useForm } from 'react-hook-form';
import Button from '../buttons/Buttons';
import Input from '../inputs/Input';
import { CustomizingValidations } from '../../utils/formValidation';
import toast from 'react-hot-toast';



const CustomizableSlider = () => {

    
    const [final, setFinalValue] = useState({ parallax: 1.2, slideCount: media.length });
    const [isloading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, formState: {
        errors,
    } } = useForm({
        mode: "onChange"
    })

    const onSubmit = (data) => {
        setIsLoading(true);
        console.log('Data', data);
        
        const slides = +data.slides;
        const parallax = +data.parallax;
        
        if (slides < 0 || slides > media.length || parallax < 0.1 || parallax > 3) {
          toast.error("Enter valid values for Slides and Parallax Effect");
          setIsLoading(false);
          return;
        }
      
        setFinalValue({
          parallax: parseFloat(parallax),
          slideCount: parseInt(slides, 10)
        });
      
        setIsLoading(false);
        toast.success("Customization is successful");
        onClose();
      };
      


    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }



    const bodyContent = (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <Input id="slides"
                    Validations={CustomizingValidations.slides}
                    label={"Number of Slides"}
                    disabled={isloading}
                    register={register}
                    placeholder={`Number of Slides(Max of ${media.length})`}
                    errors={errors}
                    value={final.slideCount}
                />

                <Input id="parallax"
                    Validations={CustomizingValidations.parallax}
                    label='Parallax Effect'
                    placeholder={"Intensity of Parallax Effect [Between 0.1-3]"}
                    disabled={isloading}
                    register={register}
                    errors={errors}
                    value={final.parallax}
                />
            </div>
            <div className="flex items-center justify-center gap-4 mt-3">
                <hr />
                <div className='flex items-center justify-center mt-4'>
                    <div className='w-40'>
                        <Button type='submit' label={"Customize slider"} onClick={onOpen} />
                    </div>
                </div>
            </div>
        </form>


    )


    return (

        <>
            <ImageSlider parallax_factor={final.parallax} slideCount={final.slideCount} />
            <div className='flex items-center justify-center mt-4'>
                <div className='w-40'>
                    <Button label={"Customize slider"} onClick={onOpen} />
                </div>
            </div>
            <Modal
                disabled={isloading}
                isOpen={isOpen}
                onClose={onClose}
                title='Customize Slider'
                actionLabel='Continue'
                body={bodyContent}

            />

        </>





    )
}

export default CustomizableSlider