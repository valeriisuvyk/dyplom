import React from 'react'
import { styled } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ContactMeContainer = styled.section`
  min-height: 100vh;
  background: #838282;
  display: grid;
  /* background-image: url('../images/contactmebg.jpg'); */
  /* background: url('../images/contactmebg.jpg') cover no-repeat; */
`

const FormFormik = styled(Form)`
  background-color: aliceblue;
  display: grid;
`

const StandartField = styled(Field)`
  background-color: rgba(20, 20, 20, 0.63);
  padding: 1rem;
  outline: none;
  text-align: center;
`

const BigField = styled(Field)`
  padding: 1rem;
  text-align: center;
  background-color: rgba(20, 20, 20, 0.63);
`

const Button = styled.button``

export const ContactMe = () => {
  return (
    <ContactMeContainer id="contactme">
      <StaticImage
        style={{
          gridArea: '1/1',
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        src="../images/contactmebg.jpg"
        alt=""
        formats={['auto', 'webp', 'avif']}
      />

      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'center',
          display: 'grid',
        }}
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().min(2, 'Name is too short'),
            email: Yup.string().email('Invalid email').required('Required'),
            subject: Yup.string(),
            message: Yup.string().required('Required'),
          })}
          onSubmit={(values) => {
            console.log(values) //TODO
          }}
        >
          <FormFormik>
            <div>
              <label>Name</label>
              <StandartField type="text" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Email*</label>
              <StandartField type="text" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label>Subject</label>
              <StandartField type="text" name="subject" />
              <ErrorMessage name="subject" />
            </div>
            <div>
              <label>Message</label>
              <BigField type="text" name="message" />
              <ErrorMessage name="message" />
            </div>

            <Button type="submit">Submit</Button>
          </FormFormik>
        </Formik>
      </div>
    </ContactMeContainer>
  )
}
