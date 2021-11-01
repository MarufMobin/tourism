import React from 'react';
import { useForm } from "react-hook-form";
import './TourSearch.css'

const TourSearch = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="custm-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="WHERE TO?" {...register("example")} className="custom-field"/>
                    <select {...register("WHEN")} className="custom-field">
                        <option value="">WHEN ?</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="Maruch">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="jun">jun</option>
                        <option value="july">july</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <select {...register("Travel Type")}  className="custom-field">
                        <option value="">Travel Type ?</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="Maruch">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="jun">jun</option>
                        <option value="july">july</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                 
                    <input type="submit" className="custom-btn"/>
                </form>
            </div>
        </div>
    );
};

export default TourSearch;