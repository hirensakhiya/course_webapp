import React from 'react'
import '../scss/_home.scss'

//Button Component
const Button = ({ children, loading, loadingText, className, onClick, ...restProps }) =>
    <button
        type="button"
        className={`${className || 'button'} ${loading ? 'button--loading' : ''}`}
        onClick={loading ? null : onClick}
        {...restProps}
    >
        {!loading ? children :
            <span className="loading" style={{fontSize: '14px'}}>
                {loading && (
                    <i
                        className="fa fa-spinner fa-pulse"
                        style={{ marginRight: "5px", fontSize: '20px' }}
                    />
                )}
                {loadingText || 'Submit'}...
            </span>
        }
    </button>

export default Button
