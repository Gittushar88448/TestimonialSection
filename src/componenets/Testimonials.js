import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React from 'react'

const Testimonials = (props) => {
    let reviews = props.reviews[0];
  return (
    <div>
        <Card reviews={reviews}></Card>

        <div>
            <button>
                <FiChevronLeft/>
            </button>

            <button>
                <FiChevronRight/>
            </button>
        </div>

        <div>
            <button>
                Surprise Me
            </button>
        </div>

    </div>
  )
}

export default Testimonials