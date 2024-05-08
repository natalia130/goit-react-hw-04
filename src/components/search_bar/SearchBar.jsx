import { Formik, Form, Field } from 'formik';
import { toast, Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    
    const onSubmit = (values, { resetForm }) => {
        if (values.searchQuery.trim() === "") {
            toast.error('Please, enter search query');
        } else {
            onSearch(values.searchQuery.trim());
        }
        resetForm();
    }


    return (
        <header>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                    background: '#363636',
                    color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                    },
                }}
            />
            <Formik
                initialValues={{ searchQuery: "" }}
                onSubmit={onSubmit}
            >
                <Form className={css.form}>
                    <Field type="text" name="searchQuery" autoComplete="off" autoFocus placeholder="Search images and photos" />
                    <button type="submit">Search</button>
                </Form>
            </Formik>
        </header>

    );
};

export default SearchBar;