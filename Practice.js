<div className={styles.itemList}>
  {itemlist.map((item) => (
    <div key={item._id} className={styles.item}>
      <div className={styles.itemContent}>
        <div className={styles.itemImageContainer}>
          <img
            src={item.product.images[0]}
            alt={item.product.name}
            className={styles.itemImage}
          />
        </div>
        <div className={styles.productContainer}>
          <div className={styles.itemName}></div>
        </div>
        <div className={styles.itemPrice}></div>
        <div className={styles.quantityContainer}>
          <label
            htmlFor={`quantity-${item._id}`}
            className={styles.quantityLabel}
          >
            Quantity
          </label>
          <div
            className={`${styles.dropDownToggle} ${styles.commonItemClass} `}
            onClick={() => {
              setShowOption(!showOption);
              setSelectId(item._id);
            }}
          >
            <span>{item.quantity}</span>
            <img src={DropDownCart} alt="" />
          </div>
          {showOption && selectId === item._id && (
            <div className={styles.customDropdown}>
              <div
                id={`quantity-${item._id}`}
                className={styles.quantityDropdown}
                value={item.quantity}
              ></div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.totalPrice}>
        <span>Total</span>{" "}
        <div className={styles.commonItemClass}>
          <span>₹{item.quantity * item.product.price}</span>
        </div>
      </div>
    </div>
  ))}
</div>;
