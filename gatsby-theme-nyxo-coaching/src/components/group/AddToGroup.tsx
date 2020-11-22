import React, { FC } from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import { TextField } from "@components/fields/TextField"
import { useGetUser, useUpdateUser } from "@hooks/useUser"
import { PrimaryButton } from "@components/buttons/PrimaryButton"

export const AddToGroup: FC = () => {
  const [mutate] = useUpdateUser()
  const { data } = useGetUser()

  const addToGroup = () => {
    mutate({
      user: {
        groups: ["testaajat"],
      },
    })
  }

  return (
    <GroupSection>
      <H5>Groups</H5>
      <P>
        Luomalla tai liittymällä ryhmään näet kaikkien ryhmäläisten Nyxo
        Pisteet.{" "}
      </P>
      {data?.groups ? (
        data.groups.map((group) => <div key={group}>{group}</div>)
      ) : (
        <div>You don't currently have any groups</div>
      )}

      <Formik
        initialValues={{ group: "" }}
        onSubmit={addToGroup}
        validationSchema={GroupSchema}>
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <TextField
              onChange={handleChange("group")}
              placeholder="Group name"
              type="group"
              name="group"
              value={values.group}
            />
            <PrimaryButton onClick={handleSubmit}>Lisää ryhmään</PrimaryButton>
          </Form>
        )}
      </Formik>
    </GroupSection>
  )
}

const GroupSection = styled.div`
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  padding: 1rem;
`

const GroupSchema = Yup.object().shape({
  group: Yup.string()
    .required("LOGIN.PASSWORD_REQUIRED")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
})
