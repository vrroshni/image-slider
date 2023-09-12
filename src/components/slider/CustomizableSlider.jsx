import React, { useState } from 'react'
import { media } from '../../utils/data';
import ImageSlider from './ImageSlider';
import Modal from '../modal/Modal';
import { useForm } from 'react-hook-form';
import Button from '../buttons/Buttons';
import Input from '../inputs/Input';
import { CustomizingValidations } from '../../utils/formValidation';
import toast from 'react-hot-toast';

/*
This component allows users to customize the ImageSlider component with
  a variable number of slides and parallax effect intensity.
*/

const CustomizableSlider = () => {

    const [final, setFinalValue] = useState({ parallax: 1.2, slideCount: media.length });
    const [isloading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    // React Hook Form configuration
    const { register, handleSubmit, reset, formState: {
        errors,
    } } = useForm({
        mode: "onChange"
    })


    // Handles form submission
    const onSubmit = (data) => {
        setIsLoading(true);
        const slides = +data.slides;
        const parallax = +data.parallax;

        if (slides <= 2 || slides > media.length || parallax < 0.1 || parallax > 3) {
            toast.error("Enter valid values for Slides and Parallax Effect");
            setIsLoading(false);
            return;
        }

        // Update the customization values
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
        reset()
        setIsOpen(false)
    }


    // Modal content for customization form
    const bodyContent = (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                {/* Input field for the number of slides */}
                <Input id="slides"
                    Validations={CustomizingValidations.slides}
                    label={"Number of Slides"}
                    disabled={isloading}
                    register={register}
                    placeholder={`Number of Slides(Max of ${media.length}) & Min of 3`}
                    errors={errors}
                    value={final.slideCount}
                />
                {/* Input field for parallax effect intensity */}
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

        <div className='min-h-full py-44 bg-gray-800' name="slider" >

            {/* Render the ImageSlider component with customized parallax and slide count */}
            <ImageSlider parallax_factor={final.parallax} slideCount={final.slideCount} />

             {/* to open the customization modal */}
            <div className='flex items-center justify-center mt-4'>
                <div className='w-40'>
                    <Button label={"Customize slider"} onClick={onOpen} />
                </div>
            </div>


           {/* Modal for customization */}
            <Modal
                disabled={isloading}
                isOpen={isOpen}
                onClose={onClose}
                title='Customize Slider'
                actionLabel='Continue'
                body={bodyContent}
            />

        </div>


    )
}

export default CustomizableSlider