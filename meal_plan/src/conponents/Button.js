//import PropTypes from 'prop-types';
import className from 'classnames';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest 
}) {
    const classes = className(
        rest.className,
        'px-3 py-1.5 border', {
            'border-smorkyGreen bg-smorkyGreen text-black' : primary,
            'border-mossGreen bg-mossGreen text-black' : secondary,
            'border-melon bg-melon text-black' : success,
            'border-woodOrange bg-woodOrange text-white' : warning,
            'border-woodPink bg-woodPink text-white' : danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-smorkyGreen': outline && primary,
            'text-mossGreen': outline && secondary,
            'text-melon': outline && success,
            'text-woodOrange': outline && warning,
            'bg-white text-woodpink': outline && danger,
        }
    );

    return (
        <div>
            <button {...rest} className={classes}>
                {children}
            </button>
        </div>
    )
};

//avoid from puting wrong prop types
// Button.propTypes = {
//     checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
//         const count = 
//         Number(!!primary) + 
//         Number(!!secondary) +
//         Number(!!success) +
//         Number(!!warning) +
//         Number(!!danger);

//         if (count > 1) {
//             return new Error(
//                 'only one of primary, secondary, success, warning, and danger can be true'
//             )
//         }
//     },
// };

export default Button;