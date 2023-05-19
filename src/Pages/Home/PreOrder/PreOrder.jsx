import React from 'react';

const PreOrder = () => {
    return (
            <div className='my-5 px-10'>
            <p className='font-bold text-3xl text-center my-5'>Pre-Order Section</p>
            <p className='font-semibold text-center my-5'>Get Our Most Exclusive Action Figures Before Everyone in Less Price</p>
           <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
           <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co/Qr2ctbd/pre-Order-1.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Action Figure:
                    Martha Assemble Heroines Summer Queen</h2>
                    <p>Old Stock Price: 35$</p>
                    <p>Pre-Order Price: 29$</p>
                    <p>Ratings:4.5</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Pre-Order Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co/BwMDxDF/newpre-2.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Action Figure: <br /> Kaguya-sama: Love Is War - Chika Fujiwara DT-170 Figure</h2>
                    <p>Old Stock Price: 55$</p>
                    <p>Pre-Order Price: 40$</p>
                    <p>Ratings:4.8</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Pre-Order Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co/7jzpq6N/newpre3.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Action Figure: Zero-Rem Figure</h2>
                    <p>Old Stock Price: 45$</p>
                    <p>Pre-Order Price: 30$</p>
                    <p>Ratings:4.3</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Pre-Order Now</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default PreOrder;



