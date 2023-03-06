import { defineComponent, ref } from "vue"
import { NButton, NInput, NForm, NFormItem, NLayout, NLayoutContent, NSpace } from "naive-ui"
import type { FormInst, FormRules } from "naive-ui"

import type { User } from "@/share/model"


export default defineComponent({
    name: 'LoginView',
    setup() {
        const renderInput = <Model extends Record<string, any>>(indexKey: keyof Model, model: Model) => {
            let placeholder: string = "Please insert " + indexKey.toString() 
            console.log(model.name)           
        return <NInput placeholder={placeholder} onUpdateValue={v => {
            if (typeof v === 'object')
                return
            else {
                const d = v as string
                model[indexKey] = d
            }
        }}></NInput>
        }
        const formRef = ref<FormInst | null>(null)
        const formModel = ref<Pick<User, 'name' | 'password'>>({
            name: 'fdfdsf',
            password: ''
        })
        const formRules: FormRules = {
            name: {
                required: true,
                trigger: 'blur'
            },
            password: {
                required: true,
                trigger: 'blur'
            }
        }
        return {
            formRef,
            formModel,
            formRules,
            renderInput
        }
    },
    render() {
        return (
            <NLayout >
                <NLayoutContent style={{}} >
                    <div style={{ 'height': '100vh', 'align-items': 'center', 'display': 'flex', justifyContent: 'center' }} >
                        <NSpace size='large' vertical>
                            <NForm ref="formRef" rules={this.formRules} model={this.formModel}>
                                <NFormItem path='name' label="login">
                                    {{ default: () => this.renderInput('name', this.formModel) }}                                    
                                </NFormItem>
                                <NFormItem path='password' label="password">
                                    {{ default: () => this.renderInput('password', this.formModel) }}
                                </NFormItem>
                                <NButton></NButton>
                            </NForm>
                        </NSpace>
                    </div>
                </NLayoutContent>
            </NLayout>
        )
    }
})